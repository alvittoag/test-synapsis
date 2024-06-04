"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";
import { addUser } from "@/action/action";
import React from "react";
import { toast } from "../ui/use-toast";

export default function ButtonAddUser() {
  const [showDialog, setShowDialog] = React.useState(false);
  const handleAction = async (formData: FormData) => {
    const res = await addUser(formData);

    if (res?.error) {
      return toast({
        variant: "destructive",
        description: res.error,
      });
    }

    toast({
      className: "bg-green-600 text-white font-semibold",
      description: "Successfully Added User",
    });

    setShowDialog(false);
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button>Add User</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>

        <form action={handleAction} className="grid gap-4 py-4">
          <Input
            placeholder="Name"
            name="name"
            className="col-span-3"
            required
          />

          <Input
            placeholder="Email"
            type="email"
            name="email"
            className="col-span-3"
            required
          />

          <Select name="gender">
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2">
            <Switch name="status" />
            <Label>Status</Label>
          </div>

          <Button className="col-span-3">Add</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

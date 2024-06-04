"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "../ui/use-toast";
import React from "react";
import { deleteUser } from "@/action/action";

export default function ButtonDeleteUser({ id }: { id: number }) {
  const [showDialog, setShowDialog] = React.useState(false);

  const { toast } = useToast();
  const handleDelete = async () => {
    const res = await deleteUser(id);

    if (res?.error) {
      return toast({
        variant: "destructive",
        description: res.error,
      });
    }

    toast({
      className: "bg-green-600 text-white font-semibold",
      description: "Successfully Deleted User",
    });

    setShowDialog(false);
  };
  return (
    <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button variant={"destructive"} onClick={handleDelete}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

"use server";

import { validationFields } from "@/lib/validation";
import users from "@/services/users";
import { revalidatePath } from "next/cache";

export const addUser = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const gender = formData.get("gender");
  const status = formData.get("status");

  const body = {
    name,
    email,
    gender,
    status: status === "on" ? "active" : "inactive",
  };

  const requiredFields = validationFields({ body });

  try {
    await users.add(body);
  } catch (err: any) {
    const typeError = err.response.data[0];

    if (typeError.message === "has already been taken") {
      return { error: `Email has already been taken` };
    }

    return { error: `Field is required : ${requiredFields.join(",")}` };
  }

  revalidatePath("/users");
};

export const editUser = async ({
  formData,
  id,
}: {
  formData: FormData;
  id: number;
}) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const gender = formData.get("gender");
  const status = formData.get("status");

  const body = {
    name,
    email,
    gender,
    status: status === "on" ? "active" : "inactive",
  };

  const requiredFields = validationFields({ body });

  try {
    await users.edit({ id, body });
  } catch (err: any) {
    const typeError = err.response.data[0];

    if (typeError.message === "has already been taken") {
      return { error: `Email has already been taken` };
    }
    return { error: `Field is required : ${requiredFields.join(",")}` };
  }

  revalidatePath("/users");
};
export const deleteUser = async (id: number) => {
  try {
    await users.delete(id);
  } catch (error) {
    return { error: "Something went wrong" };
  }

  revalidatePath("/users");
};

"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

const TutorDelete = ({ tutorId }) => {

  const handleDeleteTutor = async () => {
    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${tutorId}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
        }
      );

      const data = await res.json();
      if (data.deletedCount > 0) {
        toast.success("Tutor deleted successfully!");
        window.location.reload();
      } else {
        toast.error("Delete failed!");
      }

    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <AlertDialog>
      <Button variant="ghost" className="text-red-500 hover:text-red-700 text-lg font-bold">X</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Tutor Permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>This tutor and all related data will be permanently deleted.</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>

              <Button slot="close" variant="tertiary">Cancel</Button>
              <Button onClick={handleDeleteTutor} slot="close" variant="danger">Delete Tutor</Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default TutorDelete;
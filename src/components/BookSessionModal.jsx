"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Card,
} from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function BookSessionModal({ tutor, disabled }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const { _id, tutorName } = tutor;

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      const tokenData = await authClient.token();

      const token = tokenData?.data?.token;

      if (!token) {
        toast.error("Please login first");
        return;
      }

      const bookingData = {
        userId: user?.id,
        userName: formData.get("name"),
        userEmail: user?.email,
        userPhone: formData.get("phone"),
        tutorId: _id,
        tutorName,
        status: "confirmed",
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      console.log("STATUS:", res.status);
      console.log("DATA:", data);

      if (res.ok && data.success) {
        toast.success(data.message);
        router.refresh();
      } else {
        toast.error(data.message || "Booking failed");
      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Modal>
      <Card.Footer className="p-0 pt-2">
        <Modal.Trigger>
          <Button
            variant="ghost"
            disabled={disabled}
            className="rounded-xl border"
          >
            Book Session
          </Button>
        </Modal.Trigger>
      </Card.Footer>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-md">

            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Book Session</Modal.Heading>
              <p className="text-sm text-gray-500">
                Fill up the form to confirm booking
              </p>
            </Modal.Header>

            <Modal.Body>
              <Surface>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                  <TextField name="name">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField name="phone">
                    <Label>Phone</Label>
                    <Input placeholder="Enter phone number" />
                  </TextField>

                  <TextField>
                    <Label>Tutor Id</Label>
                    <Input value={_id} readOnly />
                  </TextField>

                  <TextField>
                    <Label>Tutor Name</Label>
                    <Input value={tutorName} readOnly />
                  </TextField>

                  <TextField>
                    <Label>Email</Label>
                    <Input value={user?.email || ""} readOnly />
                  </TextField>

                  <div className="flex justify-end gap-2 mt-4">

                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button type="submit">
                      Confirm Booking
                    </Button>

                  </div>

                </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
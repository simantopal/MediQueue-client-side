"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import { toast } from "react-toastify";

const EditTutorModal = ({ tutor }) => {

  const [tutorName, setTutorName] = useState(tutor.tutorName);
  const [subject, setSubject] = useState(tutor.subject);
  const [fee, setFee] = useState(tutor.fee);
  const [dayAndTime, setDayAndTime] = useState(tutor.dayAndTime);
  const [slot, setTotalSlot] = useState(tutor.slot);

  const handleUpdateTutor = async (e) => {
    e.preventDefault();

    const updatedTutor = { tutorName, subject, fee, dayAndTime, slot };

    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${tutor._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(updatedTutor),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Tutor updated successfully!");
        window.location.reload();

      } else {
        toast.error("Update failed!");
      }

    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Modal>
      <Button variant="ghost" className="text-green-600 font-bold text-xl">✏️</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Tutor</Modal.Heading>
            </Modal.Header>
            <Modal.Body>

              <form onSubmit={handleUpdateTutor} className="space-y-4">
                <TextField>
                  <Label>Tutor Name</Label>
                  <Input value={tutorName} onChange={(e) => setTutorName(e.target.value)} />
                </TextField>

                <TextField>
                  <Label>Subject</Label>
                  <Input value={subject} onChange={(e) => setSubject(e.target.value)} />
                </TextField>

                <TextField>
                  <Label>Hourly Fee</Label>
                  <Input value={fee} onChange={(e) => setFee(e.target.value)} />
                </TextField>

                <TextField>
                  <Label>Available Time</Label>
                  <Input value={dayAndTime} onChange={(e) => setDayAndTime(e.target.value)} />
                </TextField>

                <TextField>
                  <Label>Total Slot</Label>
                  <Input value={slot} onChange={(e) => setTotalSlot(e.target.value)} />
                </TextField>

                <div className="flex justify-end gap-3 pt-4">
                  <Button slot="close" variant="secondary">Cancel</Button>
                  <Button type="submit">Update Tutor</Button>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditTutorModal;
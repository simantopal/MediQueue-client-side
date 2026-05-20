"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

export function BookSessionModal({ tutor, disabled }) {
    const { data: session } = authClient.useSession();

    const user = session?.user;

    const { _id, tutorName } = tutor;

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const bookingData = {
            userId: user?.id,
            userName: formData.get("name"),
            userEmail: formData.get("email"),
            userPhone: formData.get("phone"),
            tutorId: _id,
            tutorName: tutorName,
            status: "confirmed",
        };

        try {
            const res = await fetch("http://localhost:5000/bookings", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(bookingData),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Booking successful!");
                console.log(data);
            } else {
                toast.error("Booking failed!");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <Modal>
            <Card.Footer className="p-0 pt-2">
                <Button
                    disabled={disabled}
                    variant="ghost"
                    className="rounded-xl border"
                >
                    Book Session
                </Button>
            </Card.Footer>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header className="flex text-center">
                            <Modal.Heading className="text-2xl">
                                Book Session
                            </Modal.Heading>

                            <p className="mt-1 text-sm text-muted">
                                Fill up the form to confirm your booking.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name:</Label>

                                        <Input placeholder="Enter your name" />
                                    </TextField>

                                    <TextField className="w-full" name="phone" type="tel">
                                        <Label>Phone:</Label>

                                        <Input placeholder="Enter your phone number" />
                                    </TextField>

                                    <TextField
                                        className="w-full"
                                        name="tutorId"
                                        type="text"
                                    >
                                        <Label>Tutor Id:</Label>

                                        <Input
                                            value={_id}
                                            readOnly
                                        />
                                    </TextField>

                                    <TextField
                                        className="w-full"
                                        name="tutorName"
                                        type="text"
                                    >
                                        <Label>Tutor Name:</Label>

                                        <Input
                                            value={tutorName}
                                            readOnly
                                        />
                                    </TextField>

                                    <TextField
                                        className="w-full"
                                        name="email"
                                        type="email"
                                    >
                                        <Label>Student Email:</Label>

                                        <Input
                                            value={user?.email || ""}
                                            readOnly
                                        />
                                    </TextField>
                                    <Modal.Footer className="mt-5">
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>

                                        <Button type="submit" slot="close">
                                            Confirm Booking
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
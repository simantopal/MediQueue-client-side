"use client";
import { AlertDialog, Button } from "@heroui/react";

const BookingDelete = ({bookingId}) => {
    const handleDeleteBooking = async() =>{
        const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            }
        })
        const data = await res.json()
        window.location.reload();
    }
    return (
        <div>
            <AlertDialog>
                <Button variant="ghost" className="text-red-500 hover:text-red-700 text-lg font-bold">
                    X
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Data permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete and all of its data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDeleteBooking} slot="close" variant="danger">
                                    Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default BookingDelete;
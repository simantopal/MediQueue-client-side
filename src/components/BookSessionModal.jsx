"use client";

import { Button, Card, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function BookSessionModal({tutor}) {
    const { _id, tutorName, imageUrl, subject, dayAndTime, departureDate, fee, institution, location, slot, experience } = tutor;

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const tutor = Object.fromEntries(formData.entries())


        // const res = await fetch('http://localhost:5000/tutor', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(tutor)
        // })
        // const data = await res.json()

        // if(res.ok){
        //     toast.success('Tutor added successfully!')
        // }

    }
    return (
        <Modal>
            <Card.Footer className="p-0 pt-2">
                <Button variant='ghost' className="rounded-xl border">
                    Book Session
                </Button>
            </Card.Footer>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header className="flex text-center">
                            <Modal.Heading className="text-2xl">Book Session</Modal.Heading>
                            <p className="mt-1 text-sm text-muted">Make change to your profile here. Click save when you are done.</p>
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
                                    <TextField defaultValue={_id} className="w-full" name="" type="text">
                                        <Label>Tutor Id:</Label>
                                        <Input placeholder="Enter your tutor name" />
                                    </TextField>
                                    <TextField defaultValue={tutorName} className="w-full" name="tutorName" type="text">
                                        <Label>Tutor Name:</Label>
                                        <Input placeholder="Enter your tutor name" />
                                    </TextField>
                                    <TextField className="w-full" name="email" type="email">
                                        <Label>Student Email:</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>
                                    
                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button type="submit" slot="close">Confirm Booking</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
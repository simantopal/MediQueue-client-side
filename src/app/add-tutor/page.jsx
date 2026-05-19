'use client'
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const AddTutorPage = () => {
    const onSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const tutor = Object.fromEntries(formData.entries())


        const res = await fetch('http://localhost:5000/tutor', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tutor)
        })
        const data = await res.json()
        
        if(res.ok){
            toast.success('Tutor added successfully!')
        }
        
    }
    return (
        <div className='container mx-auto border m-8 shadow rounded-2xl max-w-5xl'>
            <h1 className='flex items-center justify-center font-bold text-3xl mt-5 text-blue-900'>Add Tutor</h1>
            <form onSubmit={onSubmit}
            className="p-10 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* tutorName */}
              <div className="md:col-span-2">
                <TextField name="tutorName" isRequired>
                  <Label>Tutor Name</Label>
                  <Input placeholder="Jhon Doe" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Area */}
              <TextField name="location" isRequired>
                <Label>Location (Area/City)</Label>
                <Input placeholder="Dhaka" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="subject"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Subject / Category</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Physics" textValue="Physics">
                        Physics
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Chemistry" textValue="Chemistry">
                        Chemistry
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Biology" textValue="Biology">
                        Biology
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Mathematics" textValue="Mathematics">
                        Mathematics
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Web-Development" textValue="Web-Development">
                        Web-Development
                        <ListBox.ItemIndicator />
                      </ListBox.Item>               
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField name="fee" type="number" isRequired>
                <Label>Hourly fee</Label>
                <Input
                  type="number"
                  placeholder="550"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>


              {/* Duration */}
              <TextField name="dayAndTime" isRequired>
                <Label>Available Days and time</Label>
                <Input
                  placeholder="Sun - Thu 5:00 PM - 8:00 PM"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

            <div className="md:col-span-2">
              <TextField name="slot" type="number" isRequired>
                <Label>Total slot</Label>
                <Input
                  type="number"
                  placeholder="50"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="departureDate" type="date" isRequired>
                  <Label>Session Start Date</Label>
                  <Input type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* institution Name */}
              <div className="md:col-span-2">
                <TextField name="institution" isRequired>
                  <Label>Institution</Label>
                  <Input placeholder="Dhaka university" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="experience" isRequired>
                  <Label>Experience</Label>
                  <TextArea
                    placeholder="Describe your teaching experience..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            <div>
                <Select
                  name="teachingMode"
                  isRequired
                  className="w-full"
                  placeholder="Select Mode"
                >
                  <Label>Teaching Mode</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="online" textValue="Beach">
                        Online
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="offline" textValue="Mountain">
                        Offline
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="both" textValue="City">
                        Both
                        <ListBox.ItemIndicator />
                      </ListBox.Item>        
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
              className=" rounded-none w-full bg-cyan-500 text-white"
            >
                Add Tutor
            </Button>
          </form>
        </div>
    );
};

export default AddTutorPage;
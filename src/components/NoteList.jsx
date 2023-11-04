import React from "react";
import NoteItem from "./NoteItem";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    FormHelperText,
} from "@chakra-ui/react";

const NoteList = ({ notes }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("submitted");
        onClose();
    };

    return (
        <div className="mt-5">
            <div className="grid grid-cols-2 gap-5 text-slate-800">
                <div className="w-full bg-slate-200 rounded p-5">
                    <div className="flex flex-col items-center h-full justify-center">
                        <button
                            className="flex flex-col items-center hover:text-slate-500 hover:scale-105 duration-200"
                            onClick={onOpen}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-14"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="font-semibold">Add new note</span>
                        </button>
                    </div>
                </div>
                {notes.map((note) => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </div>
            <Modal isOpen={isOpen} size="xl" onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input type="text" name="title" />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Textarea name="description" />
                            </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            variant="solid"
                            colorScheme="red"
                            mr={3}
                            onClick={onClose}
                        >
                            Close
                        </Button>
                        <Button colorScheme="green" onClick={handleSubmit}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default NoteList;

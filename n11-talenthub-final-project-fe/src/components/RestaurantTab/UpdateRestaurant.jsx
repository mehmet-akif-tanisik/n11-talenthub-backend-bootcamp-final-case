/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  FormControl,
  Input,
  FormLabel,
} from '@chakra-ui/react';
import { useState } from 'react';
import { restaurantAxios } from '../../utils/base-axios';

const UpdateRestaurant = ({ afterSave, restaurant }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [values, setValues] = useState(restaurant);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await restaurantAxios.patch(`/${restaurant.id}`, values);
    afterSave();
    onClose();
  };

  const handleChange = (key) => (e) => {
    setValues((prev) => {
      return { ...prev, [key]: e.target.value };
    });
  };

  return (
    <>
      <Button size={'sm'} onClick={onOpen}>
        Update
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Restaurant information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Stack>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    defaultValue={restaurant.name}
                    onChange={handleChange('name')}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input
                    defaultValue={restaurant.location}
                    onChange={handleChange('location')}
                  />
                </FormControl>

                <Button type='submit'>Update</Button>
              </Stack>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateRestaurant;

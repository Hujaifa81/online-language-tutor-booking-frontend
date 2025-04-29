import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Modal = ({ tutor, setTutorData }) => {
  const modalRef = useRef(null);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (tutor ) {
      reset(tutor); // Pre-fill the form with tutor data
      document.getElementById('my_modal_5').showModal();
    }
  }, [tutor, reset]);

  const updateTutor = async (formData) => {
    const response = await axios.put(
      `${import.meta.env.VITE_baseURL}/updateTutor/${tutor._id}`,
      {
        ...formData,
        price: parseFloat(formData.price),
        review: parseFloat(formData.review),
      }
    );
    return response.data;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: updateTutor,
    onSuccess: () => {
      toast.success('Tutor updated successfully!');
      queryClient.invalidateQueries({ queryKey: ['myAddedTutors'] });
      queryClient.invalidateQueries({ queryKey: ['tutors'] });
      queryClient.invalidateQueries(['bookedTutors']);
      document.getElementById('my_modal_5').close();
      
    },
    onError: (error) => {
      toast.error(`Update failed: ${error.message}`);
    },
  });

  const onSubmit = (formData) => {
    mutate(formData);
  };

  return (
    <dialog  id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h2 className="text-2xl font-bold mb-4">Update Tutor</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium">Name</label>
            <input
              className="w-full border p-2 rounded"
              {...register('name', { required: true })}
              readOnly
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              className="w-full border p-2 rounded"
              {...register('email', { required: true })}
              readOnly
            />
          </div>

          {/* Image */}
          <div>
            <label className="block font-medium">Image URL</label>
            <input
              className="w-full border p-2 rounded"
              {...register('image', { required: true })}
            />
          </div>

          {/* Language */}
          <div>
            <label className="block font-medium">Language</label>
            <input
              className="w-full border p-2 rounded"
              {...register('language', { required: true })}
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium">Price</label>
            <input
              type="number"
              className="w-full border p-2 rounded"
              {...register('price', { required: true })}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              className="w-full border p-2 rounded"
              {...register('description', { required: true })}
              rows={3}
            />
          </div>

          {/* Review */}
          <div>
            <label className="block font-medium">Review</label>
            <input
              type="number"
              className="w-full border p-2 rounded"
              {...register('review', { required: true, min: 0, max: 5 })}
              readOnly
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={isPending}
          >
            {isPending ? 'Updating...' : 'Update'}
          </button>
        </form>

        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn"
              onClick={() => {
                setTutorData(null);
              }}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;

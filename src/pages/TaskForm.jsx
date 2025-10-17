import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask, viewTask } from '../features/taskSlice';
import { useNavigate, useParams } from 'react-router-dom';


// Updated Event List
const taskListOption = [
  "Business Conference",
  "Team Meeting",
  "Product Launch",
  "Social Gathering",
  "Birthday Celebration",
  "Workshop",
  "Casual Party",
  "Other"
];

const TaskForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const { id } = useParams();
  const { taskList } = useSelector((state) => state);
  const singleTask = taskList.find((task) => task.id === id);

  useEffect(() => {
    dispatch(viewTask());
    reset(singleTask);
  }, [dispatch, id]);

  function Add(data) {
    if (id == null) {
      dispatch(createTask(data));
    } else {
      dispatch(updateTask(data));
    }
    reset();
    redirect('/');
  }

  return (
    <div className="form-page d-flex justify-content-center align-items-center py-5">
      <div className="form-card shadow-lg p-5 rounded-4">
        <h2 className="text-center mb-4 text-gradient fw-bold">
          {id ? 'Update Event' : 'Create New Event'}
        </h2>

        <form id="myForm" onSubmit={handleSubmit(Add)}>
          <div className="mb-4">
            <label className="form-label fw-semibold">Event Type</label>
            <select className="form-select custom-input" {...register('task_category')} required>
              <option value="" disabled selected>-- Select Event Type --</option>
              {taskListOption.map((ele, i) => (
                <option key={i} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Event Date</label>
            <input
              type="date"
              {...register('task_date')}
              className="form-control custom-input"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Event Description</label>
            <input
              type="text"
              {...register('task_title')}
              className="form-control custom-input"
              placeholder="Enter short description..."
              required
            />
          </div>

          <div className="text-center">
            <button className="btn btn-glow px-5 py-2 fs-5">
              {id ? 'Update' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;

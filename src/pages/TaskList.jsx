import React, { useEffect } from 'react';
import { viewTask, deleteTask } from '../features/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaPencil } from 'react-icons/fa6';


const TaskList = () => {

  const { taskList } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewTask());
  }, [dispatch]);

  function trash(id) {
    dispatch(deleteTask(id));
  }

  return (
    <div className="tasklist-page py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-gradient fw-bold">📋 Event List</h2>

        <div className="row g-4">
          {taskList.length === 0 ? (
            <h4 className="text-center text-muted">No Events Found</h4>
          ) : (
            taskList.map((ele, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="event-card shadow-sm p-4 rounded-4">
                  <h4 className="fw-bold text-dark mb-2">{ele.task_title}</h4>
                  <p className="text-secondary mb-1">
                    <strong>Date:</strong> {ele.task_date}
                  </p>
                  <p className="text-secondary mb-4">
                    <strong>Type:</strong> {ele.task_category}
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-danger btn-action"
                      onClick={() => trash(ele.id)}
                    >
                      <FaTrash /> Delete
                    </button>

                    <NavLink
                      className="btn btn-edit btn-action"
                      to={`/updateTask/${ele.id}`}
                    >
                      <FaPencil /> Edit
                    </NavLink>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;

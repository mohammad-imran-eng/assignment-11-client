import DateTimePicker from "react-datetime-picker";
import { FaClock, FaMoneyBill, FaUser } from "react-icons/fa";

const AddTutor = () => {
    const handleAddTutor = e => {
        e.preventDefault();
        const form = e.target;
        const day = form.day.value;
        const time = form.time.value;
        console.log(day,time);
    }
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Add a Tutor</h1>
        <form onSubmit={handleAddTutor} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center">
                <FaUser className="mr-2" /> Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter tutor's name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              name="imageUrl"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Language Dropdown */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Language</span>
            </label>
            <select
              name="language"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select a language</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>

          {/* Review */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Review</span>
            </label>
            <textarea
              name="review"
              placeholder="Enter review"
              className="textarea textarea-bordered w-full"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea
              name="details"
              placeholder="Enter details"
              className="textarea textarea-bordered w-full"
              rows="3"
              required
            ></textarea>
          </div>


          {/* Experience */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Experience</span>
            </label>
            <input
              type="text"
              name="experience"
              placeholder="Enter experience"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Hourly Rate */}
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center">
                <FaMoneyBill className="mr-2" /> Hourly Rate
              </span>
            </label>
            <input
              type="number"
              name="hourly_rate"
              placeholder="Enter hourly rate"
              className="input input-bordered w-full"
              required
            />
          </div>


          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Add Tutor
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default AddTutor;
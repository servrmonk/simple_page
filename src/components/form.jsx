function Popupform({ closeModal }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
        <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8 bg-white relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
          
          <form>
            <div className="space-y-6">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                <input
                  name="name"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Description</label>
                <input
                  name="description"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder=""
                />
              </div>
  
              <div className="flex justify-evenly">
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Price</label>
                  <input
                    name="price"
                    type="number"
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Category</label>
                  <input
                    name="category"
                    type="text"
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder=""
                  />
                </div>
              </div>
              
              <div className="flex justify-evenly">
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Created At</label>
                  <input
                    name="createdAt"
                    type="date"
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Updated At</label>
                  <input
                    name="updatedAt"
                    type="date"
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
  
            <div className="mt-12 flex justify-end space-x-4">
              <button
                type="button"
                onClick={closeModal}
                className="w-fit py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="button"
                className="w-fit py-3 px-6 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Popupform;
  
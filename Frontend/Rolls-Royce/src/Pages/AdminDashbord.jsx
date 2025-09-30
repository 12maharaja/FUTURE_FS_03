import React, { useState } from "react";


function AdminDashboard() {
  const [bookings, setBookings] = useState([
    { id: 1, name: "Arun", model: "Phantom", date: "2025-10-05" },
    { id: 2, name: "Priya", model: "Ghost", date: "2025-10-12" },
  ]);

  const [cars, setCars] = useState([
    { id: 1, modelName: "Phantom", engineType: "V12", price: 450000 },
    { id: 2, modelName: "Cullinan", engineType: "V12 SUV", price: 400000 },
  ]);

  const [newCar, setNewCar] = useState({
    modelName: "",
    engineType: "",
    price: "",
  });

  const handleAddCar = (e) => {
    e.preventDefault();
    setCars([...cars, { id: Date.now(), ...newCar }]);
    setNewCar({ modelName: "", engineType: "", price: "" });
  };

  const handleDeleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  return (
    <div className="admin-dashboard">
      <h1>⚙️ Admin Dashboard</h1>

      {/* Bookings Section */}
      <section className="admin-section">
        <h2>Customer Bookings</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Model</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.model}</td>
                <td>{b.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Cars Section */}
      <section className="admin-section">
        <h2>Manage Cars</h2>
        <form className="add-car-form" onSubmit={handleAddCar}>
          <input
            type="text"
            placeholder="Model Name"
            value={newCar.modelName}
            onChange={(e) =>
              setNewCar({ ...newCar, modelName: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Engine Type"
            value={newCar.engineType}
            onChange={(e) =>
              setNewCar({ ...newCar, engineType: e.target.value })
            }
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newCar.price}
            onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
            required
          />
          <button type="submit">Add Car</button>
        </form>

        <ul className="car-list">
          {cars.map((car) => (
            <li key={car.id}>
              {car.modelName} – {car.engineType} – ${car.price}
              <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdminDashboard;

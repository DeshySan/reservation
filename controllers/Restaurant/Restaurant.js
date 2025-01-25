import restaurant from "../../database/restaurant.js";

export const postRestaurant = async (req, res) => {
  try {
    const { name, address, owner, availableTimeSlots } = req.body;
    if (
      name !== "" &&
      address !== "" &&
      owner !== "" &&
      availableTimeSlots !== ""
    ) {
      const newRestaurant = new restaurant({
        name,
        address,
        owner,
        availableTimeSlots,
      });
      await newRestaurant.save();
      res.status(201).send({
        message: "New Restaurant has been successfully created",
        newRestaurant,
        success: true,
      });
    } else {
      res.status(404).send({
        message: "Missing parameters has been provided",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRestaurant = async (req, res) => {
  try {
    const Restro = await restaurant.find({});
    res.status(200).send({
      message: "Retrieved all the data successfully",
      Restro,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateReservation = async (req, res) => {};

import restaurant from "../../database/restaurant";

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

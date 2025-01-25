import reservation from "../../database/reservation";

export const postReservation = async (req, res) => {
  try {
    const { customer, restaurant, date, timeSlot, status } = req.body;

    const newReservation = await new reservation({
      customer,
      restaurant,
      date,
      timeSlot,
      status,
    }).save();

    res.status(201).send({
      message: "New Reservation has been created successfully",
      newReservation,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};

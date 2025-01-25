import Swal from "sweetalert2";

export const sweetError = (err) => {
  const criticism = [
    "Needs improvement.",
    "Could do better.",
    "Not quite there yet.",
    "A little more effort is needed.",
    "Keep working on it.",
    "Almost, but not quite.",
    "You're getting closer, but still needs work.",
    "This could be better.",
    "Room for growth.",
    "Needs more attention to detail.",
    "Try again, you can do better.",
    "Could use some fine-tuning.",
    "Not up to standard yet.",
    "Needs some polishing.",
    "Keep pushing, you're not quite there.",
    "It’s a start, but there's more to do.",
    "Focus more on the details.",
    "You’re almost there, just a bit more.",
    "Not bad, but there’s room for improvement.",
    "Better luck next time!",
  ];
  const random = Math.floor(Math.random() * admiration.length);
  Swal.fire({
    icon: "error",
    title: criticism[random],
    text: err,
  });
};

export const sweetSuccess = (msg) => {
  const admiration = [
    "Amazing job!",
    "Well done!",
    "You're awesome!",
    "Fantastic!",
    "Impressive!",
    "Nice work!",
    "You're killing it!",
    "Keep it up!",
    "Excellent work!",
    "You're on fire!",
    "That's the spirit!",
    "Superb!",
    "Way to go!",
    "Top-notch work!",
    "Great effort!",
    "Proud of you!",
    "You're a rockstar!",
    "Perfection!",
    "Absolutely brilliant!",
    "You're doing great!",
  ];

  const random = Math.floor(Math.random() * admiration.length);

  Swal.fire({
    icon: "success",
    title: admiration[random],
    text: msg,
  });
};

export const sweetWarning = (warn) => {
  return Swal.fire({
    icon: "warning",
    title: "Warning",
    text: warn,
    showCancelButton: true,
    confirmButtonText: "Okay",
    cancelButtonText: "Cancel",
    reverseButtons: true,
  });
};

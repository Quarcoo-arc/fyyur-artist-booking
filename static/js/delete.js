const deleteBtn = document.getElementById("delete_venue");

const venueId = deleteBtn.dataset["id"];

const deleteVenue = async () => {
  const result = await fetch(`/venues/${venueId}`, {
    method: "DELETE",
  });

  result.status === 200
    ? (window.location.href = "/venues")
    : alert("Failed to delete venue " + venueId + "!");
};

deleteBtn.addEventListener("click", deleteVenue);

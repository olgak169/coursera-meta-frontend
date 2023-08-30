const routes = new Map();
routes.set("home", { name: "Home", path: "/", anchorable: true });
routes.set("about", { name: "About", path: "/about", anchorable: true });
routes.set("menu", { name: "Menu", path: "/menu", anchorable: true });
routes.set("booking", {
  name: "Booking",
  path: "/booking",
  anchorable: true,
});
// routes.set("confirmedBooking", {
//   name: "Confirmed Booking",
//   path: "/confirmed-booking",
//   anchorable: false,
// });

export default routes;

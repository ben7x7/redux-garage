// TODO: add and export your own actions
const ROOT_URL = 'https://wagon-garage-api.herokuapp.com';

export const FETCH_CARS = 'FETCH_CARS';
export const REMOVE_CAR = 'REMOVE_CAR';
export const ADD_CAR = 'ADD_CAR';

export function fetchCars(garage) {
  const url = `${ROOT_URL}/${garage}/cars`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function removeCar(history, car) {
  const url = `${ROOT_URL}/cars/${car.id}`;
  fetch(url, { method: 'DELETE'})
    .then(response => response.json())
    .then(() => history.push(""));

    return {
      type: REMOVE_CAR,
      payload: car
    };
}
export function addCar(garage, car, callback) {
  const url = `${ROOT_URL}/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  }).then(response => response.json())
    .then(() => callback());

  return {
    type: ADD_CAR,
    payload: request
  };
}

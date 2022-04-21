import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:5231/api',
  headers: {
    'Accept-Language': 'en',
    'Content-Type': 'application/json',
  },
});

export const URL_PATH = {
	user: {
		login: "/User/login",
		regiser: "/User/register",
    update: "/User/update"
	},
  sellerListing: {
    fetchProperties: "/Property",
    buyProperty: "/Property/buy",
    rentProperty: "/Property/rent",
    pgProperty: "/Property/pg-coliving",
  }
};
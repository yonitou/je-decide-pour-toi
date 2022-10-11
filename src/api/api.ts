import { actionType } from "@Types/action.types";
import { humorType } from "@Types/humor.types";
import axios from "axios";
import Constants from "expo-constants";

const api = axios.create({
	baseURL: Constants.manifest.extra.apiUrl,
	timeout: 30000,
});

export const getHumors = async (): Promise<humorType[]> => {
	const response = await api.get("/humeurs");
	return response?.data;
};

export const getAction = async (id: number): Promise<actionType> => {
	const response = await api.get(`/humeurs/${id}`);
	return response?.data;
};

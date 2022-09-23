import { proposalData } from "../data/proposalData";
import { pointsData } from "../data/pointsData";
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    proposals: proposalData,
    points: pointsData,
    selectedProposal: {
        key: 0,
        num: "",
        createdDate: "",
        startPoint: {

        },
        endPoint: {

        }
    },
};

export const proposalSlice = createSlice({
    name: "proposalsSlice",
    initialState,
    reducers: {
        setProposals: (state, action) => {
            state.proposals = action.payload;
        },
        setPoints: (state, action) => {
            state.points = action.payload;
        },
        setSelectedProposal: (state, action) => {
            state.selectedProposal = action.payload;
        }
    }
})

export default proposalSlice.reducer;

export const { setProposals, setSelectedProposal, setPoints } = proposalSlice.actions;
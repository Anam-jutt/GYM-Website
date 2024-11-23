import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
  try {
    const response = await fetch("https://672f08fc229a881691f1a366.mockapi.io/CRUD", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// ShowData Action 
export const showUser = createAsyncThunk("showUser", async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://672f08fc229a881691f1a366.mockapi.io/CRUD");
      const result = await response.json();  
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  
// delete User Action 
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://672f08fc229a881691f1a366.mockapi.io/CRUD/${id}`,{
        method:"DELETE",
      });
      const result = await response.json();  
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  // Updater Function
  export const updateUser = createAsyncThunk(
    "updateUser",
    async ({ id, data }, { rejectWithValue }) => {
      try {
        const response = await fetch(`https://672f08fc229a881691f1a366.mockapi.io/CRUD/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {}, // Add any synchronous reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message here
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message here
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        // Use action.meta.arg for filtering out the deleted user
        state.users = state.users.filter(user => user.id !== action.meta.arg);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default userDetails.reducer;

const mockResponse = {
  data: {
    results: [
      {
        name: { first: "Caleb", last: "Duniya" },
        picture: {
          large: "https://randomuser.me/api/portraits/men/36.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/36.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/me",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
    ],
  },
};
export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};

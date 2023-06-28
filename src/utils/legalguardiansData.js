export const fetchLegalguardianData = async (id) => {
  const legalguardiansData = [
    {
      id: "school1",
      name: "School 1",
      location: "Location 1",
    },
    {
      id: "school2",
      name: "School 2",
      location: "Location 2",
    },
    {
      id: "school3",
      name: "School 3",
      location: "Location 3",
    },
    {
      id: "school4",
      name: "School 4",
      location: "Location 4",
    },
    {
      id: "school5",
      name: "School 5",
      location: "Location 5",
    },
    {
      id: "school6",
      name: "School 6",
      location: "Location 6",
    },
    {
      id: "school7",
      name: "School 7",
      location: "Location 7",
    },
    {
      id: "school8",
      name: "School 8",
      location: "Location 8",
    },
    {
      id: "school9",
      name: "School 9",
      location: "Location 9",
    },
    {
      id: "school10",
      name: "School 10",
      location: "Location 10",
    },
  ];

  return legalguardiansData.filter((guardian) => guardian.id === id);
};

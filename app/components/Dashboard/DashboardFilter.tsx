"use client";

import { useState } from "react";
import { MenuItem, Select, Checkbox, ListItemText, SelectChangeEvent } from "@mui/material";

const franchises = [
  "Genshin Impact",
  "Grandmaster of Demonic Cul...",
  "Heaven Official's Blessing",
  "Kamisama Kiss",
  "League of Legends",
  "Naruto",
  "Pokémon",
];

export default function DashboardFilter() {
  const [selectedFranchises, setSelectedFranchises] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedFranchises(typeof value === "string" ? value.split(",") : value);
    console.log("Selected:", typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Select
      multiple
      displayEmpty
      value={selectedFranchises}
      onChange={handleChange}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return "Select a franchise...";
        }
        return `${selected.length} selected`;
      }}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        PaperProps: {
          sx: {
            backgroundColor: 'rgba(54, 54, 54, 0.6)',
            backdropFilter: 'blur(8px)',
            borderRadius: '16px',
            marginTop: '16px',
          }
        },
        MenuListProps: {
          sx: {
            backgroundColor: 'rgba(54, 54, 54, 0.6)',
          }
        }
      }}
      sx={{ 
        backgroundColor: '#363636',
        borderRadius: '100px',
        fontSize: '14px',
        '& .MuiSelect-select': {
          padding: '8px 16px',
          border: 'none',
          opacity: 0.6,
        },
        '& .MuiSelect-icon': {
          color: 'white',
          opacity: 0.6,
        },
        '& fieldset': {
          border: 'none',
        },
      }}
    >
      {franchises.map((franchise) => (
        <MenuItem 
          key={franchise} 
          value={franchise}
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'transparent',
            },
            '&.Mui-selected:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
          }}
        >
          <Checkbox 
            checked={selectedFranchises.includes(franchise)} 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              pointerEvents: 'none',
            }} 
            size="small" 
          />
          <ListItemText 
            primary={franchise} 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              pointerEvents: 'none',
            }} 
          />
        </MenuItem>
      ))}
    </Select>
  );
}
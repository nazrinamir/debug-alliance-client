// src/utils/fetchExcelData.js
import * as XLSX from 'xlsx';

/**
 * Fetches and parses Excel data from a given URL.
 * @param {string} url - The URL to the Excel file.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of objects representing the Excel data.
 */
export const fetchExcelData = async (url) => {
  try {
    // Fetch the file
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    
    // Read the workbook
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    
    // Get the first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    
    // Convert sheet data to JSON
    const data = XLSX.utils.sheet_to_json(sheet);
    return data;
  } catch (error) {
    console.error('Error fetching or parsing Excel data:', error);
    return [];
  }
};

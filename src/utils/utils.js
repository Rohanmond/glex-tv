import { toast } from 'react-toastify';

export const searchFilter = (data, searchPattern) => {
  let newData = [...data];
  if (searchPattern === '') return newData;
  newData = newData.filter(
    (el) =>
      el.title.toLowerCase().includes(searchPattern?.toLowerCase()) ||
      el.creator.toLowerCase().includes(searchPattern?.toLowerCase())
  );
  return newData;
};

const sortByDate = (data) => {
  return [...data].sort((a, b) => {
    return new Date(b.release_date) - new Date(a.release_date);
  });
};
export const categoryFilter = (data, category) => {
  let newData = [...data];
  if (!category || category === 'all') return newData;
  if (category === 'sort by latest') return sortByDate(data);
  return newData.filter((el) => el.categories.find((cat) => cat === category));
};

export const validateMobileNo = (input) => {
  return /^[0-9]+$/.test(input);
};
export const validatePinCode = (input) => {
  return /^[0-9]+$/.test(input) && input.length === 6;
};
export const validateOnlyString = (input) => {
  return /^[a-z A-Z]+$/.test(input) || input === '';
};
export const validateEmail = (input) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input.toLowerCase()
  );
};
export const validatePassword = (input) => {
  return /^(?=.{8,20}$)\D*\d/.test(input);
};

export const toastHandler = (type, message) => {
  if (type === 'error') {
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'warn') {
    toast.warn(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'success') {
    toast.success(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'info') {
    toast.info(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const ToastType = {
  Warn: 'warn',
  Success: 'success',
  Info: 'info',
  Error: 'error',
};

const useMonth = (date) => {
  switch (date) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "Mei";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Agu";
    case 8:
      return "Sep";
    case 9:
      return "Okt";
    case 10:
      return "Nov";
    case 11:
      return "Des";
  }
};

export default useMonth;

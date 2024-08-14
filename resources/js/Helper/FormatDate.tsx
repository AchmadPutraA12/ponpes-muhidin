import moment from "moment";
import "moment/locale/id"; // Import locale untuk bahasa Indonesia

// Set default locale to Indonesian
moment.locale("id");

export const formatDate = (date: string) => {
    return moment(date).format("DD MMMM YYYY");
};

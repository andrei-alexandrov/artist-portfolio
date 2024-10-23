export const getCoursesData = (t: any) => {
    return [
        {
            videoUrl: "/public-assets/isi-2.MP4",
            coverPhoto: "/public-assets/isi-2-pic.JPEG",
            title: t("courses.coursesCardOne.title"),
            description1: t("courses.coursesCardOne.description"),
            description2: "",
        },
        {
            videoUrl: "/public-assets/isi-1.MP4",
            coverPhoto: "/public-assets/isi-1-pic.JPEG",
            title: t("courses.coursesCardTwo.title"),
            description1: t("courses.coursesCardTwo.description"),
            description2: "",
        },
        {
            videoUrl: "",
            coverPhoto: "/public-assets/isi-2-pic.JPEG",
            title: t("courses.coursesCardThree.title"),
            description1: t("courses.coursesCardThree.description"),
            description2: "",
        },
    ];
};
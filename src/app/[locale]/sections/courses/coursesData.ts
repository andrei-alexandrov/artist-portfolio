export const getCoursesData = (t: any) => {
    return [
        {
            videoUrl: "https://res.cloudinary.com/dd7vuqevl/video/upload/v1729860460/isi-2_yskvp3.mp4",
            coverPhoto: "/public-assets/isi-2-pic.jpg",
            title: t("courses.coursesCardOne.title"),
            description1: t("courses.coursesCardOne.description"),
            description2: "",
        },
        {
            videoUrl: "https://res.cloudinary.com/dd7vuqevl/video/upload/v1729860492/isi-1_vgkzzm.mp4",
            coverPhoto: "/public-assets/isi-1-pic.jpg",
            title: t("courses.coursesCardTwo.title"),
            description1: t("courses.coursesCardTwo.description"),
            description2: "",
        },
        {
            videoUrl: "",
            coverPhoto: "/public-assets/isi-2-pic.jpg",
            title: t("courses.coursesCardThree.title"),
            description1: t("courses.coursesCardThree.description"),
            description2: "",
        },
    ];
};
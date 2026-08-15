export type Course = {
    videoUrl: string;
    coverPhoto: string;
    title: string;
    description: string;
};

type CourseKey =
    `courses.coursesCard${"One" | "Two" | "Three"}.${"title" | "description"}`;

export const getCoursesData = (t: (key: CourseKey) => string): Course[] => {
    return [
        {
            videoUrl: "https://res.cloudinary.com/dd7vuqevl/video/upload/v1729860460/isi-2_yskvp3.mp4",
            coverPhoto: "/public-assets/isi-2-pic.jpg",
            title: t("courses.coursesCardOne.title"),
            description: t("courses.coursesCardOne.description"),
        },
        {
            videoUrl: "https://res.cloudinary.com/dd7vuqevl/video/upload/v1729860492/isi-1_vgkzzm.mp4",
            coverPhoto: "/public-assets/isi-1-pic.jpg",
            title: t("courses.coursesCardTwo.title"),
            description: t("courses.coursesCardTwo.description"),
        },
        {
            videoUrl: "",
            coverPhoto: "/public-assets/isi-2-pic.jpg",
            title: t("courses.coursesCardThree.title"),
            description: t("courses.coursesCardThree.description"),
        },
    ];
};

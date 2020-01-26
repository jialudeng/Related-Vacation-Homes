const dummyData = [
    {
        "listingId" : 15,
        "recommendations" : [
            {
                "images" : [
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo10",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo12",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo18",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo13",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo1"
                ],
                "recommendationId" : 0,
                "title" : "Sint cupiditate laudantium qui sit ut vitae architecto veniam dolores.",
                "pricePerNight" : "393.70",
                "typeOfListing" : "Shared room",
                "numOfBeds" : 3,
                "numOfStars" : 4,
                "numOfReviews" : 90,
                "likedStatus" : false,
                "plusStatus" : true
            },
            {
                "images" : [
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo18",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo12",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo5",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo27",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo30"
                ],
                "recommendationId" : 1,
                "title" : "Modi dolorem tempora illum est temporibus aut mollitia.",
                "pricePerNight" : "128.69",
                "typeOfListing" : "Private room",
                "numOfBeds" : 2,
                "numOfStars" : 0,
                "numOfReviews" : 45,
                "likedStatus" : false,
                "plusStatus" : true
            },
            {
                "images" : [
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo31",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo26",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo19",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo34",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo32"
                ],
                "recommendationId" : 2,
                "title" : "Doloremque facilis quo beatae sit qui nam facere nihil in.",
                "pricePerNight" : "165.88",
                "typeOfListing" : "Entire place",
                "numOfBeds" : 3,
                "numOfStars" : 0,
                "numOfReviews" : 59,
                "likedStatus" : true,
                "plusStatus" : true
            },
            {
                "images" : [
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo33",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo15",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo11",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo26",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo36"
                ],
                "recommendationId" : 3,
                "title" : "Amet est cupiditate aut optio neque rerum quo molestias nihil.",
                "pricePerNight" : "438.06",
                "typeOfListing" : "Private room",
                "numOfBeds" : 1,
                "numOfStars" : 0,
                "numOfReviews" : 15,
                "likedStatus" : true,
                "plusStatus" : true
            },
            {
                "images" : [
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo26",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo12",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo6",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo34",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo8"
                ],
                "recommendationId" : 4,
                "title" : "Debitis voluptates aut dolores distinctio consequuntur rerum dolor fugiat harum.",
                "pricePerNight" : "252.18",
                "typeOfListing" : "Shared room",
                "numOfBeds" : 2,
                "numOfStars" : 1,
                "numOfReviews" : 70,
                "likedStatus" : true,
                "plusStatus" : true
            },
            {
                "images" : [
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo39",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo8",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo26",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo17",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo20"
                ],
                "recommendationId" : 5,
                "title" : "Veritatis voluptate quia est in aut sed.",
                "pricePerNight" : "438.91",
                "typeOfListing" : "Shared room",
                "numOfBeds" : 4,
                "numOfStars" : 2,
                "numOfReviews" : 84,
                "likedStatus" : false,
                "plusStatus" : true
            },
            {
                "images" : [
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo33",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo25",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo12",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo1",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo27"
                ],
                "recommendationId" : 6,
                "title" : "Eum aut aut ut.",
                "pricePerNight" : "206.65",
                "typeOfListing" : "Shared room",
                "numOfBeds" : 4,
                "numOfStars" : 2,
                "numOfReviews" : 100,
                "likedStatus" : true,
                "plusStatus" : false
            },
            {
                "images" : [
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo17",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo3",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo18",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo13",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo15"
                ],
                "recommendationId" : 7,
                "title" : "Rerum aut aliquam sunt accusamus dignissimos molestias quod est.",
                "pricePerNight" : "246.82",
                "typeOfListing" : "Entire place",
                "numOfBeds" : 4,
                "numOfStars" : 1,
                "numOfReviews" : 52,
                "likedStatus" : true,
                "plusStatus" : true
            },
            {
                "images" : [
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo5",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo3",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo13",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo16",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo2"
                ],
                "recommendationId" : 8,
                "title" : "Ut similique qui hic quo facere occaecati repellat.",
                "pricePerNight" : "139.36",
                "typeOfListing" : "Private room",
                "numOfBeds" : 4,
                "numOfStars" : 2,
                "numOfReviews" : 82,
                "likedStatus" : false,
                "plusStatus" : true
            },
            {
                "images" : [
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo34",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo23",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo13",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo3",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo10"
                ],
                "recommendationId" : 9,
                "title" : "Eveniet culpa quia a.",
                "pricePerNight" : "241.80",
                "typeOfListing" : "Shared room",
                "numOfBeds" : 3,
                "numOfStars" : 4,
                "numOfReviews" : 80,
                "likedStatus" : true,
                "plusStatus" : true
            },
            {
                "images" : [
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo34",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo30",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo20",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo28",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo12"
                ],
                "recommendationId" : 10,
                "title" : "Fuga eos sit qui dolores reiciendis voluptas aut et maiores.",
                "pricePerNight" : "486.96",
                "typeOfListing" : "Entire place",
                "numOfBeds" : 2,
                "numOfStars" : 3,
                "numOfReviews" : 51,
                "likedStatus" : true,
                "plusStatus" : true
            },
            {
                "images" : [
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo35",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo18",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo7",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo11",
                    "http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo16"
                ],
                "recommendationId" : 11,
                "title" : "Velit et voluptatum reiciendis porro quae reiciendis natus deleniti voluptatem.",
                "pricePerNight" : "111.00",
                "typeOfListing" : "Private room",
                "numOfBeds" : 4,
                "numOfStars" : 4,
                "numOfReviews" : 19,
                "likedStatus" : false,
                "plusStatus" : true
            }
        ],
        "__v" : 0
    }
]

export default dummyData;
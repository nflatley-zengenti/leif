import React from 'react';
import BlogPost from './blogPost.page';

export default {
  title: 'Blog/Page/BlogPost',
  component: BlogPost,
}

const Template = () => {

  const sampleEntryJSON = {
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "primaryImage": {
        "altText": "Woman at desk",
        "transformations": null,
        "caption": "",
        "asset": {
            "thumbnail": null,
            "keywords": null,
            "altText": null,
            "entryDescription": null,
            "description": null,
            "sys": {
                "owner": "ServicesUser",
                "metadata": {
                    "includeInAToZ": false,
                    "includeInSearch": true,
                    "includeInSiteMap": false,
                    "includeInMenu": false,
                    "nodeId": "b464a2aa-2a87-42bb-8fba-554f78641d0b"
                },
                "dataFormat": "asset",
                "isPublished": true,
                "availableLanguages": [
                    "en-GB"
                ],
                "contentTypeId": "image",
                "language": "en-GB",
                "uri": "/image-library/blog-images/woman-at-desk.xe0b25bd8.png",
                "version": {
                    "publishedBy": "ServicesUser",
                    "createdBy": "ServicesUser",
                    "created": "2021-02-08T12:03:03.1010021Z",
                    "versionNo": "1.0",
                    "modified": "2021-02-08T12:03:03.1010021Z",
                    "modifiedBy": "ServicesUser",
                    "published": "2021-02-08T12:55:46.0375257Z"
                },
                "versionStatus": "published",
                "id": "b464a2aa-2a87-42bb-8fba-554f78641d0b",
                "projectId": "leif",
                "slug": null,
                "properties": {
                    "filename": "woman-at-desk.png",
                    "fileSize": 24737,
                    "width": 288,
                    "fileId": "b464a2aa-2a87-42bb-8fba-554f78641d0b",
                    "height": 240
                }
            },
            "title": "Woman at desk",
            "entryTitle": "Woman at desk"
        }
    },
    "leadParagraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus interdum praesent tortor, elit vel tortor nunc, amet. Tempor nunc natoque eget amet. ",
    "author": {
        "name": "John Smith",
        "entryDescription": null,
        "photo": {
            "altText": "Image of John Smith",
            "transformations": null,
            "caption": "",
            "asset": {
                "thumbnail": null,
                "keywords": null,
                "altText": null,
                "entryDescription": null,
                "description": null,
                "sys": {
                    "owner": "ServicesUser",
                    "metadata": {
                        "includeInAToZ": false,
                        "includeInSearch": true,
                        "includeInSiteMap": false,
                        "includeInMenu": false,
                        "nodeId": "a1713bf3-832d-41ef-bd80-ba40a4c6f5a2"
                    },
                    "dataFormat": "asset",
                    "isPublished": true,
                    "availableLanguages": [
                        "en-GB"
                    ],
                    "contentTypeId": "image",
                    "language": "en-GB",
                    "uri": "/image-library/people-images/profile-img.xc6a8f997.png",
                    "version": {
                        "publishedBy": "ServicesUser",
                        "createdBy": "ServicesUser",
                        "created": "2021-02-08T12:02:44.4401614Z",
                        "versionNo": "1.0",
                        "modified": "2021-02-08T12:02:44.4401614Z",
                        "modifiedBy": "ServicesUser",
                        "published": "2021-02-08T12:03:00.5528191Z"
                    },
                    "versionStatus": "published",
                    "id": "a1713bf3-832d-41ef-bd80-ba40a4c6f5a2",
                    "projectId": "leif",
                    "slug": null,
                    "properties": {
                        "filename": "profile-img.png",
                        "fileSize": 3814,
                        "width": 40,
                        "fileId": "a1713bf3-832d-41ef-bd80-ba40a4c6f5a2",
                        "height": 40
                    }
                },
                "title": "profile-img",
                "entryTitle": "profile-img"
            }
        },
        "sys": {
            "owner": "j.moore",
            "metadata": {},
            "workflow": {
                "id": "contensisEntryBasic",
                "state": "versionComplete"
            },
            "dataFormat": "entry",
            "isPublished": true,
            "availableLanguages": [
                "en-GB"
            ],
            "contentTypeId": "person",
            "allUris": [],
            "language": "en-GB",
            "uri": null,
            "version": {
                "publishedBy": "j.moore",
                "createdBy": "j.moore",
                "created": "2021-02-08T12:02:44.7057882Z",
                "versionNo": "1.0",
                "modified": "2021-02-08T12:02:47.5577883Z",
                "modifiedBy": "j.moore",
                "published": "2021-02-08T12:02:48.7256925Z"
            },
            "versionStatus": "published",
            "id": "192c2ed9-0394-458e-bc37-4555b2da7744",
            "projectId": "leif",
            "slug": "john-smith",
            "properties": {}
        },
        "entryTitle": "John Smith"
    },
    "entryDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "externalPromotion": {
        "externalTitle": null,
        "externalDescription": null
    },
    "sys": {
        "owner": "j.moore",
        "metadata": {},
        "workflow": {
            "id": "contensisEntryBasic",
            "state": "versionComplete"
        },
        "dataFormat": "entry",
        "isPublished": true,
        "availableLanguages": [
            "en-GB"
        ],
        "contentTypeId": "blogPost",
        "allUris": [
            "/blog/blog-title-can-span-multiple-lines-of-text"
        ],
        "language": "en-GB",
        "uri": "/blog/blog-title-can-span-multiple-lines-of-text",
        "version": {
            "publishedBy": "j.moore",
            "createdBy": "j.moore",
            "created": "2021-02-08T12:03:04.4291422Z",
            "versionNo": "3.0",
            "modified": "2021-02-09T14:18:06.882596Z",
            "modifiedBy": "j.moore",
            "published": "2021-02-09T14:18:08.087856Z"
        },
        "versionStatus": "published",
        "id": "95764a4b-b04a-4121-871a-20e44e6ce121",
        "projectId": "leif",
        "slug": "blog-title-can-span-multiple-lines-of-text",
        "properties": {}
    },
    "title": "Blog title can span multiple lines of text",
    "callToAction": {
        "linkToExternalURL": "https://www.contensis.com/contact-us",
        "title": "CTA title can span multiple lines",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.",
        "linkToInternalContent": null
    },
    "postBody": [
        {
            "type": "markup",
            "value": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh. Orci, molestie nisi, aliquam accumsan, eros, ipsum. Ante velit ullamcorper ultricies morbi. Malesuada ipsum felis, fermentum mauris. Diam mauris ultrices sed nunc, eget neque lectus porttitor. Eget duis iaculis sed pharetra. Viverra risus amet nisl, volutpat vestibulum cursus donec id aliquam. Diam sollicitudin curabitur hac consectetur elementum at. Nisi lectus bibendum aliquam placerat tortor.</p>"
        },
        {
            "type": "image",
            "value": {
                "altText": "Optional image title",
                "transformations": null,
                "caption": "Image accreditation and information can span multiple lines.",
                "asset": {
                    "thumbnail": null,
                    "keywords": null,
                    "altText": null,
                    "entryDescription": null,
                    "description": null,
                    "sys": {
                        "owner": "ServicesUser",
                        "metadata": {
                            "includeInAToZ": false,
                            "includeInSearch": true,
                            "includeInSiteMap": false,
                            "includeInMenu": false,
                            "nodeId": "81744835-f6ff-42f0-9e3f-6da87885b75b"
                        },
                        "dataFormat": "asset",
                        "isPublished": true,
                        "availableLanguages": [
                            "en-GB"
                        ],
                        "contentTypeId": "image",
                        "language": "en-GB",
                        "uri": "/image-library/blog-images/plant-in-home.xdac77836.png",
                        "version": {
                            "publishedBy": "ServicesUser",
                            "createdBy": "ServicesUser",
                            "created": "2021-02-08T12:03:04.1478873Z",
                            "versionNo": "1.0",
                            "modified": "2021-02-08T12:03:04.1478873Z",
                            "modifiedBy": "ServicesUser",
                            "published": "2021-02-08T12:55:46.3187774Z"
                        },
                        "versionStatus": "published",
                        "id": "81744835-f6ff-42f0-9e3f-6da87885b75b",
                        "projectId": "leif",
                        "slug": null,
                        "properties": {
                            "filename": "plant-in-home.png",
                            "fileSize": 484377,
                            "width": 840,
                            "fileId": "81744835-f6ff-42f0-9e3f-6da87885b75b",
                            "height": 480
                        }
                    },
                    "title": "Plant in home",
                    "entryTitle": "Plant in home"
                }
            }
        },
        {
            "type": "markup",
            "value": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quisque nisl mattis elementum nunc nunc at arcu. Consectetur neque, volutpat sapien vel, non faucibus tempor. Laoreet quisque eu, nec iaculis sed ultricies imperdiet ut. At at sed tortor molestie. Duis morbi urna morbi dolor, suspendisse diam, blandit. <br />Tortor sit tempus porttitor faucibus.</p>\n<p>Fames sagittis urna tellus proin tellus elementum, maecenas magna. Sem integer lobortis vel viverra quisque viverra fusce purus ultricies. Pretium, justo, bibendum fusce ante tortor montes, ante faucibus risus.</p>"
        },
        {
            "type": "blockQuote",
            "value": {
                "text": "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem ridiculus ipsum ac neque, quis morbi. Maecenas ullamcorper iaculis ipsum porttitor. In vitae orci sapien egestas quis senectus.”",
                "source": "Me"
            }
        },
        {
            "type": "markup",
            "value": "<p>Elit non sed nibh laoreet aenean. Leo a habitasse id ullamcorper duis tellus. Ullamcorper diam arcu vulputate massa potenti. Convallis orci, consectetur facilisi magnis euismod. Aliquam purus placerat habitant ultrices in malesuada. Turpis elementum bibendum faucibus elementum consectetur ut diam. Purus interdum pharetra quam nulla. Senectus id urna, massa id eget porttitor habitant feugiat semper. Massa consequat, vel turpis tellus, egestas sapien rhoncus vitae arcu. Magna volutpat nulla ac in vel, nunc, egestas faucibus.</p>"
        },
        {
            "type": "featuredProduct",
            "value": {
                "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis adipiscing urna, tellus. Elit fringilla mattis tempus sodales magna enim eleifend. Blandit arcu sed dignissim elementum.",
                "buttonText": "Find out more",
                "product": {
                    "externalCardImage": null,
                    "matchingPots": [
                        {
                            "externalCardImage": null,
                            "entryDescription": "Vit is a mid-sized white pot that will suit any modern Scandinavian-style interior.",
                            "description": "Vit is a mid-sized white pot that will suit any modern Scandinavian-style interior.",
                            "externalPromotion": {
                                "externalTitle": "Buy a Vit mid-sized white pot from Leif",
                                "externalDescription": "Vit is a mid-sized white pot that will suit any modern Scandinavian-style interior."
                            },
                            "productInformation": {
                                "price": 19.99,
                                "sku": "133456"
                            },
                            "sys": {
                                "owner": "r.bromley",
                                "metadata": {},
                                "workflow": {
                                    "id": "contensisEntryBasic",
                                    "state": "versionComplete"
                                },
                                "dataFormat": "entry",
                                "isPublished": true,
                                "availableLanguages": [
                                    "en-GB"
                                ],
                                "contentTypeId": "pot",
                                "allUris": [
                                    "/products-shop/pots/vit-mid-sized-white-pot"
                                ],
                                "language": "en-GB",
                                "uri": "/products-shop/pots/vit-mid-sized-white-pot",
                                "version": {
                                    "publishedBy": "r.bromley",
                                    "createdBy": "r.bromley",
                                    "created": "2021-02-01T08:22:08.8033359Z",
                                    "versionNo": "2.0",
                                    "modified": "2021-02-08T14:41:19.0363523Z",
                                    "modifiedBy": "r.bromley",
                                    "published": "2021-02-08T14:41:22.388099Z"
                                },
                                "versionStatus": "published",
                                "id": "452a4ee5-611b-4382-b7c7-06d810b5e698",
                                "projectId": "leif",
                                "slug": "vit-mid-sized-white-pot",
                                "properties": {}
                            },
                            "photos": [],
                            "productName": "Vit mid-sized white pot",
                            "externalDimensions": {
                                "diameter": 20,
                                "height": 19
                            },
                            "colour": [
                                "White"
                            ],
                            "material": "Ceramic",
                            "size": 19,
                            "thumbnailImage": null,
                            "entryTitle": "Vit mid-sized white pot"
                        }
                    ],
                    "otherCommonNames": [
                        "Canary date palm",
                        "Slender date palm"
                    ],
                    "entryDescription": "An easy-to-care for palm that will add ready-made African vibes to any room. ",
                    "description": "An easy-to-care for palm that will add ready-made African vibes to any room. ",
                    "externalPromotion": {
                        "externalTitle": "Buy a canary island date palm from Leif",
                        "externalDescription": "An easy-to-care for palm that will add ready-made African vibes to any room. "
                    },
                    "productInformation": {
                        "price": 24.99,
                        "sku": "123456"
                    },
                    "sys": {
                        "owner": "r.bromley",
                        "metadata": {},
                        "workflow": {
                            "id": "contensisEntryBasic",
                            "state": "versionComplete"
                        },
                        "dataFormat": "entry",
                        "isPublished": true,
                        "availableLanguages": [
                            "en-GB"
                        ],
                        "contentTypeId": "plant",
                        "allUris": [
                            "/products-shop/plants/canary-island-date-palm"
                        ],
                        "language": "en-GB",
                        "uri": "/products-shop/plants/canary-island-date-palm",
                        "version": {
                            "publishedBy": "j.moore",
                            "createdBy": "r.bromley",
                            "created": "2021-01-31T20:31:43.6320145Z",
                            "versionNo": "6.0",
                            "modified": "2021-02-09T14:45:30.0341934Z",
                            "modifiedBy": "j.moore",
                            "published": "2021-02-09T14:45:50.339418Z"
                        },
                        "versionStatus": "published",
                        "id": "d647012b-897e-4b6b-bfb5-b9844ef3d648",
                        "projectId": "leif",
                        "slug": "canary-island-date-palm",
                        "properties": {}
                    },
                    "latinName": "Phoenix canariensis",
                    "type": {
                        "entryDescription": "Palms are a group of plants that generally belong to the botanical family Arecaceae. ",
                        "description": "Palms are a group of plants that generally belong to the botanical family Arecaceae, although some plants outside of this family are also known as palms. Palms can be climbers, shrubs, tree-like and stemless plants. Generally native to tropical and sub-tropical climates, most palms are distinguished by their large, compound, evergreen leaves, known as fronds, arranged at the top of an unbranched stem. However, palms exhibit an enormous diversity in physical characteristics and inhabit nearly every type of habitat within their range, from rainforests to deserts.  Palms have been important to humans throughout much of history. In many historical cultures, because of their importance as food, palms were symbols for such ideas as victory, peace, and fertility. For inhabitants of cooler climates today, palms symbolize the tropics and vacations.",
                        "shortDescription": "Palms are a group of plants that generally belong to the botanical family Arecaceae. ",
                        "sys": {
                            "owner": "r.bromley",
                            "metadata": {},
                            "workflow": {
                                "id": "contensisEntryBasic",
                                "state": "versionComplete"
                            },
                            "dataFormat": "entry",
                            "isPublished": true,
                            "availableLanguages": [
                                "en-GB"
                            ],
                            "contentTypeId": "plantType",
                            "allUris": [],
                            "language": "en-GB",
                            "uri": null,
                            "version": {
                                "publishedBy": "r.bromley",
                                "createdBy": "r.bromley",
                                "created": "2021-02-02T09:02:59.5976041Z",
                                "versionNo": "2.0",
                                "modified": "2021-02-02T09:15:23.2982192Z",
                                "modifiedBy": "r.bromley",
                                "published": "2021-02-02T09:15:25.4211547Z"
                            },
                            "versionStatus": "published",
                            "id": "d66447c5-2198-4b19-bad3-c921e9ef0db0",
                            "projectId": "leif",
                            "slug": "palm",
                            "properties": {}
                        },
                        "title": "Palm",
                        "entryTitle": "Palm"
                    },
                    "photos": [],
                    "productName": "Canary Island Date Palm",
                    "growingConditions": [
                        {
                            "entryDescription": "This plant likes bright indirect light or partial shade. ",
                            "description": "This plant likes bright indirect light or partial shade. ",
                            "sys": {
                                "owner": "r.bromley",
                                "metadata": {},
                                "workflow": {
                                    "id": "contensisEntryBasic",
                                    "state": "versionComplete"
                                },
                                "dataFormat": "entry",
                                "isPublished": true,
                                "availableLanguages": [
                                    "en-GB"
                                ],
                                "contentTypeId": "growingConditions",
                                "allUris": [],
                                "language": "en-GB",
                                "uri": null,
                                "version": {
                                    "publishedBy": "r.bromley",
                                    "createdBy": "r.bromley",
                                    "created": "2021-01-31T21:03:41.0368631Z",
                                    "versionNo": "1.0",
                                    "modified": "2021-01-31T21:03:41.0368631Z",
                                    "modifiedBy": "r.bromley",
                                    "published": "2021-01-31T21:03:43.2433972Z"
                                },
                                "versionStatus": "published",
                                "id": "711251f9-f9c6-473b-8b62-0ec8a0d4978c",
                                "projectId": "leif",
                                "slug": "partial-shade",
                                "properties": {}
                            },
                            "title": "Partial shade",
                            "entryTitle": "Partial shade"
                        }
                    ],
                    "size": {
                        "potDiameter": null,
                        "height": null
                    },
                    "careAdvice": "<p>Don't overwater.</p>",
                    "thumbnailImage": {
                        "altText": "",
                        "transformations": "w=533&h=280&crop=400,280,67,0",
                        "caption": "",
                        "asset": {
                            "thumbnail": null,
                            "keywords": null,
                            "altText": null,
                            "entryDescription": null,
                            "description": null,
                            "sys": {
                                "owner": "ServicesUser",
                                "metadata": {
                                    "includeInAToZ": false,
                                    "includeInSearch": true,
                                    "includeInSiteMap": false,
                                    "includeInMenu": false,
                                    "nodeId": "29a070f5-e72c-41e8-89f7-2d9e4a704475"
                                },
                                "dataFormat": "asset",
                                "isPublished": true,
                                "availableLanguages": [
                                    "en-GB"
                                ],
                                "contentTypeId": "image",
                                "language": "en-GB",
                                "uri": "/image-library/product-images/plant-images/spider-plant-card.x4ceb4079.png?w=533&h=280&crop=400,280,67,0",
                                "version": {
                                    "publishedBy": "ServicesUser",
                                    "createdBy": "ServicesUser",
                                    "created": "2021-02-08T12:11:09.9288245Z",
                                    "versionNo": "1.0",
                                    "modified": "2021-02-08T12:11:09.9288245Z",
                                    "modifiedBy": "ServicesUser",
                                    "published": "2021-02-09T07:59:43.1696652Z"
                                },
                                "versionStatus": "published",
                                "id": "29a070f5-e72c-41e8-89f7-2d9e4a704475",
                                "projectId": "leif",
                                "slug": null,
                                "properties": {
                                    "filename": "spider-plant-card.png",
                                    "fileSize": 374337,
                                    "width": 1200,
                                    "fileId": "29a070f5-e72c-41e8-89f7-2d9e4a704475",
                                    "height": 630
                                }
                            },
                            "title": "spider-plant-card",
                            "entryTitle": "spider-plant-card"
                        }
                    },
                    "entryTitle": "Canary Island Date Palm"
                },
                "externalButtonLink": null,
                "title": "Featured product banner title"
            }
        },
        {
            "type": "markup",
            "value": "<p>Duis massa faucibus mattis enim eu lacus aliquet. Neque arcu vel justo amet et. Elit, quisque egestas donec pharetra orci, nisl. Nulla pharetra, vestibulum faucibus condimentum vitae tortor. Aliquam ut velit, sit enim hendrerit turpis quam amet. Ultrices euismod pulvinar dolor pretium turpis. Iaculis nec tristique ullamcorper dignissim. Porttitor tristique viverra diam urna, et ullamcorper morbi augue tincidunt.</p>"
        },
        {
            "type": "video",
            "value": {
                "externalURL": "https://www.youtube.com/watch?v=PpCw5tB59Hk",
                "internalVideo": null,
                "transcript": null,
                "entryDescription": null,
                "text": "7 essential tips",
                "source": "YouTube",
                "sys": {
                    "owner": "j.moore",
                    "metadata": {},
                    "workflow": {
                        "id": "contensisEntryBasic",
                        "state": "versionComplete"
                    },
                    "dataFormat": "entry",
                    "isPublished": true,
                    "availableLanguages": [
                        "en-GB"
                    ],
                    "contentTypeId": "accessibleVideo",
                    "allUris": [],
                    "language": "en-GB",
                    "uri": null,
                    "version": {
                        "publishedBy": "j.moore",
                        "createdBy": "j.moore",
                        "created": "2021-02-08T12:53:09.0768984Z",
                        "versionNo": "1.0",
                        "modified": "2021-02-08T12:53:09.0768984Z",
                        "modifiedBy": "j.moore",
                        "published": "2021-02-08T12:53:11.3871229Z"
                    },
                    "versionStatus": "published",
                    "id": "193b719f-e199-4d9d-96f5-7ed3fed7fd1f",
                    "projectId": "leif",
                    "slug": "7-essential-tips",
                    "properties": {}
                },
                "entryTitle": "7 essential tips"
            }
        },
        {
            "type": "markup",
            "value": "<p>Fames sagittis urna tellus proin tellus elementum, maecenas magna. Sem integer lobortis vel viverra quisque viverra fusce purus ultricies. Pretium, justo, bibendum fusce ante tortor montes, ante faucibus risus.</p>"
        }
    ],
    "thumbnailImage": {
        "altText": "Pant in home",
        "transformations": null,
        "caption": "Optional image title",
        "asset": {
            "thumbnail": null,
            "keywords": null,
            "altText": null,
            "entryDescription": null,
            "description": null,
            "sys": {
                "owner": "ServicesUser",
                "metadata": {
                    "includeInAToZ": false,
                    "includeInSearch": true,
                    "includeInSiteMap": false,
                    "includeInMenu": false,
                    "nodeId": "81744835-f6ff-42f0-9e3f-6da87885b75b"
                },
                "dataFormat": "asset",
                "isPublished": true,
                "availableLanguages": [
                    "en-GB"
                ],
                "contentTypeId": "image",
                "language": "en-GB",
                "uri": "/image-library/blog-images/plant-in-home.xdac77836.png",
                "version": {
                    "publishedBy": "ServicesUser",
                    "createdBy": "ServicesUser",
                    "created": "2021-02-08T12:03:04.1478873Z",
                    "versionNo": "1.0",
                    "modified": "2021-02-08T12:03:04.1478873Z",
                    "modifiedBy": "ServicesUser",
                    "published": "2021-02-08T12:55:46.3187774Z"
                },
                "versionStatus": "published",
                "id": "81744835-f6ff-42f0-9e3f-6da87885b75b",
                "projectId": "leif",
                "slug": null,
                "properties": {
                    "filename": "plant-in-home.png",
                    "fileSize": 484377,
                    "width": 840,
                    "fileId": "81744835-f6ff-42f0-9e3f-6da87885b75b",
                    "height": 480
                }
            },
            "title": "Plant in home",
            "entryTitle": "Plant in home"
        }
    },
    "category": {
        "name": "Category 1",
        "entryDescription": "Blog category 1",
        "description": "Blog category 1",
        "sys": {
            "owner": "j.moore",
            "metadata": {},
            "workflow": {
                "id": "contensisEntryBasic",
                "state": "versionComplete"
            },
            "dataFormat": "entry",
            "isPublished": true,
            "availableLanguages": [
                "en-GB"
            ],
            "contentTypeId": "category",
            "allUris": [],
            "language": "en-GB",
            "uri": null,
            "version": {
                "publishedBy": "j.moore",
                "createdBy": "j.moore",
                "created": "2021-02-08T12:04:31.8534259Z",
                "versionNo": "1.0",
                "modified": "2021-02-08T12:04:31.8534259Z",
                "modifiedBy": "j.moore",
                "published": "2021-02-08T12:04:34.0655086Z"
            },
            "versionStatus": "published",
            "id": "72e29bcc-5f26-429b-a56a-0944a80eafdf",
            "projectId": "leif",
            "slug": "category-1",
            "properties": {}
        },
        "entryTitle": "Category 1"
    },
    "entryTitle": "Blog title can span multiple lines of text",
    "kicker": "Rhoncus interdum praesent tortor, elit vel tortor nunc, amet. Tempor nunc natoque eget amet."
}
    
  return <BlogPost entry={sampleEntryJSON} />;
};

export const Primary = Template.bind({});

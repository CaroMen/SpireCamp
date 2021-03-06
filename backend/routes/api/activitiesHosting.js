const express = require('express');
const asyncHandler = require('express-async-handler');

const { Hosting, Activities_List, Activity } = require('../../db/models');
// const activity = require('../../db/models/activity');

const router = express.Router();


router.get(
    '/:id',
    asyncHandler(async (req, res, next) => {
        let id = parseInt(req.params.id, 10);
        let hosting = await Hosting.findAll({
            include: {
                model: Activities_List,
                where: {
                    activities_id: id
                }
            },
        });
        res.json(hosting);
    })
);

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        let activities = await Activity.findAll();
        res.json(activities);
    })
);

module.exports = router;

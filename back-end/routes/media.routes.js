import express from 'express'
import mediaCtrl from '../controller/media.controller'

const router = express.Router()

router.route('/api/media/video')
    .get(mediaCtrl.video)

router.route('/api/media/popular') 
    .get(mediaCtrl.listPopular)

router.route('/api/media/related/:mediaId')
    .get(mediaCtrl.listRelated)

router.route('/api/media/by/:userId')
    .get(mediaCtrl.listByUser)

router.param('mediaId', mediaCtrl.mediaByID)

export default router

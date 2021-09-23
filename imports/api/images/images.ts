import { Meteor } from 'meteor/meteor'
import { FilesCollection } from 'meteor/ostrio:files'

export const ImageCollection = new FilesCollection({
  collectionName: 'images',
  allowClientCode: false, 
  onBeforeUpload(file: any) {
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true
    }
    return 'Please upload an image, with a size equal or less than 10MB'
  }
})

if (Meteor.isServer) {
  Meteor.publish('files.images.all', function () {
    return ImageCollection.find().cursor
  })

  Meteor.methods({
    'images.url'(id: string) {
      const image = ImageCollection.findOne(id)
      const url = image.link()
      return url
    }
  })
}

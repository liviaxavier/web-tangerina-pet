// import request from '../_base';
import subcategory_mock from './subcategory_mock.json'
import category_mock from './category_mock.json'

const CategoryServices = {
  SubcategoryList: async () => {
    try {
      // const response = await request.get('/subcategory')
      // return response.data 
      return subcategory_mock
    } catch (error) {
      throw error
    }
  },
  List: async () => {
        try {
      // const response = await request.get('/category')
      // return response.data 
      return category_mock
    } catch (error) {
      throw error
    }
  }
}

export default CategoryServices
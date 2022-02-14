import collaborator_mock from './collaborator_mock.json'
const CollaboratorServices = {
  List: () => {
    try {
      // const response = await request.get('/collaborator')
      // return response.data 
      return collaborator_mock
    } catch (error) {
      throw error
    }
  }
}

export default CollaboratorServices
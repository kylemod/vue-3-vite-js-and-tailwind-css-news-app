import { toRefs, reactive } from 'vue'

export default function(url) {
  const state = reactive({
    data: [],
    error: null,
    fetching: false
  })
  
  const fetchData = async () => {
    state.fetching = true
    try {
      await fetch(url)
        .then(response => response.json())
        .then(result => {
          if(result.status == "error") {
            state.error = result.message
          } else {
            state.data = result
          }
        })
    } 
    catch(e) {
      state.error = e
    }
    finally {
      state.fetching = false
    }
  }
  
  return {...toRefs(state), fetchData}
}
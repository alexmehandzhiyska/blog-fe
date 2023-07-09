const getAll = async () => {
    const response = await fetch('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};

export const categoryService = { getAll };
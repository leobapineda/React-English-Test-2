import React, { useEffect, useState } from 'react'

    // obtener un valor
        // log cada vez que el valor cambia

function useUpdateLogger(text) {
    console.log("useUpdateLogger");
    console.log(text);
    useEffect(() => {
    }, [text]);

}

export default useUpdateLogger

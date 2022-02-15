import { useEffect } from 'react';
import useFirstRender from './useFirstRender';


function useUpdateEffect(effect, deps){
  const isFirst = useFirstRender();

  useEffect(() => {
    if(!isFirst){
      return effect();
    }
  },deps);
}


export default useUpdateEffect;
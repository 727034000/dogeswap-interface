const CACHE_KEY = 'dog-token-info';

export function getLocalCacheOfDogTokenInfo() {
    const localCache = window.localStorage.getItem(CACHE_KEY)
    let parsedCache: any = undefined;
    if (localCache) {
      parsedCache = JSON.parse(localCache)
    }
    return parsedCache;
  }
  
export function setLocalCacheOfDogTokenInfo(data: any) {
    if (data) {
        window.localStorage.setItem(CACHE_KEY, JSON.stringify(data))
    }
}


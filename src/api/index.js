import Ajax from './ajax.js';

export const getSuggestionAddr = (data) => {
  return Ajax('/wechat/addr/suggestionaddr', data, 'POST')
}
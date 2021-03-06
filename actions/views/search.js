// Copyright (c) 2018-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {SearchTypes} from 'utils/constants';

export function setModalSearchTerm(term) {
    return async (dispatch) => {
        dispatch({
            type: SearchTypes.SET_MODAL_SEARCH,
            data: term,
        });
        return {data: true};
    };
}

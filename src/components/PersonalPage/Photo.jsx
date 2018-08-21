import { Button, Divider, Icon, Modal, Upload } from 'antd';
import React, { Component, Fragment } from 'react';
import ReactCrop, { makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseUri } from '../../constats';
import api from '../../services/api';

class Photo extends Component {
    state = {
        visible: false,
        crop: {},
        image: undefined,
        imagePreviewUrl: '',
        imageUrl: '',
        minHeight: 200,
        minWidth: 160,
    }

    onImageLoaded = image => {
        this.setState({
            crop: makeAspectCrop({
                x: 0,
                y: 0,
                aspect: 4 / 5,
                height: 200,
                width: 160,
            }, image.naturalWidth / image.naturalHeight),
            image,
        });
    }

    onCropChange = crop => {
        this.setState({ crop });
    }

    handleOk = () => {
        const { account, active_user } = this.props;
        const { crop, image, fileList } = this.state;
        if (image) {
            const formData = new FormData();
            fileList.forEach(file => formData.append('photo', file));
            formData.append('x', crop.x);
            formData.append('y', crop.y);
            formData.append('height', crop.height);
            formData.append('width', crop.width);
            api.uploadProfileImage('', account.id, formData)
                .then(() => this.setState({
                    visible: false,
                    imageUrl: `${baseUri}/${active_user.get('profile').photo}?=${new Date().getTime()}`,
                    imagePreviewUrl: '',
                }));
        }
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    beforeUpload = file => {
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
        this.setState({ fileList: [file] });
    }

    componentWillReceiveProps() {
        const { active_user } = this.props;
        this.setState({
            imageUrl: `${baseUri}/${active_user.get('profile').photo}?=${new Date().getTime()}`
        });
    }

    render() {
        const { account, active_user } = this.props;
        const { imagePreviewUrl, imageUrl } = this.state;
        return (
            <Fragment>
                <img
                    src={imageUrl}
                    style={{ maxHeight: 200, maxWidth: 160, minHeight: 250, maxWidth: 200, margin: 12 }}
                />
                <Modal
                    title="Profile photo"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {!imagePreviewUrl && (
                        <Upload.Dragger
                            name='photo'
                            multiple={false}
                            showUploadList={false}
                            beforeUpload={this.beforeUpload}
                        >
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Upload.Dragger>
                    )}
                    {!!imagePreviewUrl && (
                        <ReactCrop
                            {...this.state}
                            src={this.state.imagePreviewUrl}
                            onImageLoaded={this.onImageLoaded}
                            onChange={this.onCropChange}
                        />
                    )}
                </Modal>
                {account.id != active_user.id && (
                    <Fragment>
                        <Button type='primary' style={{ marginBottom: 10 }} >
                            <Link to={`/messages/${active_user.id}`}>Send a message</Link>
                        </Button>
                        <div>{active_user.profile.name} is your friend</div>
                    </Fragment>
                )}
                {account.id == active_user.id && (
                    <Button onClick={() => this.setState({ visible: true })}>
                        <Icon type="upload" />Upload image
                        </Button>
                )}
                <Divider />
            </Fragment>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Photo);
